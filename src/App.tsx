import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Section01_HeroShowcase } from './sections/Section01_HeroShowcase';
import { Section02_HeritageTicker } from './sections/Section02_HeritageTicker';
import { Section03_PixelReveal } from './sections/Section03_PixelReveal';
import { Section04_3DParticleSphere } from './sections/Section04_3DParticleSphere';
import { Section05_IconicCollections } from './sections/Section05_IconicCollections';
import { Section06_RingBuilder } from './sections/Section06_RingBuilder';
import { Section07_HighJewelryGallery } from './sections/Section07_HighJewelryGallery';
import { Section08_DiamondEducation } from './sections/Section08_DiamondEducation';
import { Section09_HeritageTimeline } from './sections/Section09_HeritageTimeline';
import { Section10_VirtualTryOn } from './sections/Section10_VirtualTryOn';
import { Section11_AtelierCraftsmanship } from './sections/Section11_AtelierCraftsmanship';
import { Section12_RunwayLookbook } from './sections/Section12_RunwayLookbook';
import { Section13_LuxuryGiftFinder } from './sections/Section13_LuxuryGiftFinder';
import { Section14_BridalSuite } from './sections/Section14_BridalSuite';
import { Section15_BoutiqueConcierge } from './sections/Section15_BoutiqueConcierge';
import { Section16_Testimonials } from './sections/Section16_Testimonials';
import { Section17_ProductMatrix } from './sections/Section17_ProductMatrix';
import { Section18_SocialGallery } from './sections/Section18_SocialGallery';
import { Section19_VIPNewsletter } from './sections/Section19_VIPNewsletter';
import { Section20_LuxuryFooter } from './sections/Section20_LuxuryFooter';

import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { QuickViewModal } from './components/QuickViewModal';
import { CustomCursor } from './components/animations/CustomCursor';

import { PRODUCTS } from './data/products';
import type { Product, CartItem } from './types';

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product, quantity = 1, ringSize?: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedRingSize === ringSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, selectedRingSize: ringSize }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
      );
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const wishlistIds = wishlist.map((w) => w.id);

  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#a38c6d] selection:text-white relative">
      <CustomCursor />

      {/* 1. Official Graff Navigation */}
      <Navigation
        cartItems={cartItems}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBooking={() => scrollToSection('boutique-booking')}
        onSelectCategory={() => scrollToSection('catalog-matrix')}
      />

      {/* 2. Official Graff 20 Sections Structure */}
      <main>
        {/* Section 1: Hero Campaign Banner (Male Model Laurence Graff Signature) */}
        <Section01_HeroShowcase
          onExploreClick={() => scrollToSection('catalog-matrix')}
          onBookClick={() => scrollToSection('boutique-booking')}
        />

        {/* Section 2: Heritage Ticker Marquee */}
        <Section02_HeritageTicker />

        {/* Section 3: Ring Carousel (4 Isolated Rings) */}
        <Section03_PixelReveal onExploreClick={() => scrollToSection('catalog-matrix')} />

        {/* Section 4: 2-Column Editorial Grid (Macro Ring Zoom & Bangles) */}
        <Section04_3DParticleSphere onExploreClick={() => scrollToSection('catalog-matrix')} />

        {/* Section 5: High Jewelry Emerald Engagement Banner */}
        <Section05_IconicCollections onSelectCategory={() => scrollToSection('catalog-matrix')} />

        {/* Section 6: High Jewelry Diamond Necklace Silk Marble Banner */}
        <Section06_RingBuilder />

        {/* Section 7: High Jewelry Masterpieces Gallery & Layout Toggle */}
        <Section07_HighJewelryGallery
          products={PRODUCTS}
          onSelectProduct={(p: Product) => setSelectedProduct(p)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* Section 8: Category Product Carousel (Pendants, Eternity Bands, Drop Earrings) */}
        <Section08_DiamondEducation />

        {/* Section 9: 50/50 Split Editorial Feature 1 (Model wearing diamond necklace) */}
        <Section09_HeritageTimeline />

        {/* Section 10: 50/50 Split Editorial Feature 2 (Diamond Drop Earrings on beige silk) */}
        <Section10_VirtualTryOn />

        {/* Section 11: Bespoke 360° Ring Customizer */}
        <Section11_AtelierCraftsmanship />

        {/* Section 12: Swiss Pixel Scratch Unveil Canvas */}
        <Section12_RunwayLookbook />

        {/* Section 13: The World of Graff 3-Card Grid */}
        <Section13_LuxuryGiftFinder />

        {/* Section 14: 3D Gemstone Particle Sphere Studio */}
        <Section14_BridalSuite />

        {/* Section 15: Virtual AR Try-On Studio */}
        <Section15_BoutiqueConcierge />

        {/* Section 16: Legendary Historic Gems Timeline */}
        <Section16_Testimonials />

        {/* Section 17: The 4 Cs Diamond Mastery Guide */}
        <Section17_ProductMatrix />

        {/* Section 18: Global Flagship Salon Booking */}
        <Section18_SocialGallery />

        {/* Section 19: Official Graff Newsletter Banner */}
        <Section19_VIPNewsletter />

        {/* Section 20: Official Graff Multi-Column Footer */}
        <Section20_LuxuryFooter
          onOpenBooking={() => scrollToSection('boutique-booking')}
          onSelectCategory={() => scrollToSection('catalog-matrix')}
        />
      </main>

      {/* Global Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(product: Product) => setSelectedProduct(product)}
      />

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
      />
    </div>
  );
}

export default App;
