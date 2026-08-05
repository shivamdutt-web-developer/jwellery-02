import { useState } from 'react';
import { PRODUCTS } from './data/products';
import type { Product, CartItem } from './types';
import { Navigation } from './components/Navigation';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { CustomCursor } from './components/animations/CustomCursor';

// Import All 20 Explicit Luxury Sections
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

export function App() {
  // Global Interactive Application State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1, ringSize: '6.0' }
  ]);
  const [wishlist, setWishlist] = useState<string[]>(['graff-001']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Cart Operations
  const handleAddToCart = (product: Product, quantity = 1, ringSize?: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity, ringSize }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  // Wishlist Operations
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  // Navigation Scrolling Helpers
  const scrollToCatalog = () => {
    document.getElementById('catalog-matrix')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    document.getElementById('boutique-booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white relative font-sans selection:bg-[#897358] selection:text-white">
      {/* Luxury Golden Follower Cursor */}
      <CustomCursor />

      {/* Navigation Bar Header */}
      <Navigation
        cartItems={cartItems}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBooking={scrollToBooking}
        onSelectCategory={() => scrollToCatalog()}
      />

      {/* MAIN CONTENT: 20 COMPREHENSIVE SECTIONS */}
      <main>
        {/* Section 1: Hero Showcase */}
        <Section01_HeroShowcase onExploreClick={scrollToCatalog} onBookClick={scrollToBooking} />

        {/* Section 2: Heritage Ticker */}
        <Section02_HeritageTicker />

        {/* Section 3: Swiss Pixel Reveal Scratch Canvas */}
        <Section03_PixelReveal />

        {/* Section 4: 3D Interactive Particle Sphere Studio */}
        <Section04_3DParticleSphere />

        {/* Section 5: Iconic Collections Showcase */}
        <Section05_IconicCollections onSelectCategory={() => scrollToCatalog()} />

        {/* Section 6: Bespoke 360° Ring Customizer */}
        <Section06_RingBuilder onAddToCart={handleAddToCart} />

        {/* Section 7: High Jewelry Gallery with Fancy Layout Toggle */}
        <Section07_HighJewelryGallery
          products={PRODUCTS}
          onSelectProduct={(p) => setQuickViewProduct(p)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlist}
        />

        {/* Section 8: The 4 Cs Diamond Mastery Guide */}
        <Section08_DiamondEducation />

        {/* Section 9: Legendary Historic Gems Timeline */}
        <Section09_HeritageTimeline />

        {/* Section 10: Virtual AR Try-On Studio */}
        <Section10_VirtualTryOn />

        {/* Section 11: London Atelier Craftsmanship Workflow */}
        <Section11_AtelierCraftsmanship />

        {/* Section 12: High Jewelry Parallax Lookbook */}
        <Section12_RunwayLookbook products={PRODUCTS} onSelectProduct={(p) => setQuickViewProduct(p)} />

        {/* Section 13: VIP Luxury Gift Recommendation Wizard */}
        <Section13_LuxuryGiftFinder products={PRODUCTS} onSelectProduct={(p) => setQuickViewProduct(p)} />

        {/* Section 14: Bridal & Engagement Suite */}
        <Section14_BridalSuite />

        {/* Section 15: Global Flagship Concierge Appointment Booking */}
        <Section15_BoutiqueConcierge />

        {/* Section 16: Press Accolades & Client Testimonials */}
        <Section16_Testimonials />

        {/* Section 17: Interactive Filtered E-Commerce Catalog Matrix */}
        <Section17_ProductMatrix
          products={PRODUCTS}
          onSelectProduct={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlist}
        />

        {/* Section 18: World of Graff Social Masonry Showcase */}
        <Section18_SocialGallery />

        {/* Section 19: VIP Atelier Newsletter & Trust Badges */}
        <Section19_VIPNewsletter />
      </main>

      {/* Section 20: Comprehensive Luxury Footer */}
      <Section20_LuxuryFooter onOpenBooking={scrollToBooking} onSelectCategory={() => scrollToCatalog()} />

      {/* GLOBAL INTERACTIVE MODALS */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />
    </div>
  );
}

export default App;
