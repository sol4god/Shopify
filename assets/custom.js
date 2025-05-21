/*
* Pipeline Theme
*
* Use this file to add custom Javascript to Pipeline.  Keeping your custom
* Javascript in this fill will make it easier to update Pipeline. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*
*/


(function() {

  // Below are example event listeners.  They listen for theme events that Pipeline
  // fires in order to make it easier for you to add customizations.

  // Keep your scripts inside this IIFE function call to avoid leaking your
  // variables into the global scope.

  document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('2024-10-08T05:00:00Z'); // 'Z' indicates UTC
    const now = new Date();
    
    if (now >= targetDate) {
        document.querySelectorAll('section-template--17836874006696__ss_countdown_timer_bar_2_WgXLRa countdown-timer-template--17836874006696__ss_countdown_timer_bar_2_WgXLRa').forEach(function(el) {
            el.classList.add('show-after-date');
        });
    }
  });

  document.addEventListener('theme:variant:change', function(event) {
    // You might use something like this to write a pre-order feature or a
    // custom swatch feature.
    var variant = event.detail.variant;
    var container = event.target;
    if (variant) {
      console.log('Container ———————— ↓');
      console.log(container);
      console.log('Variant —————————— ↓');
      console.log(variant);
      // ... update some element on the page
    }
  });

  document.addEventListener('theme:cart:change', function(event) {
    var cart = event.detail.cart;
    if (cart) {
      console.log('Cart ———————————— ↓');
      console.log(cart);
      // ... update an app or a custom shipping caluclator
    }
  });
  // Fired when page loads to update header values
  document.addEventListener('theme:cart:init', (e) => {
    console.log('theme:cart:init');
    console.log(e);
  });


  

const cartPopdown = document.querySelector('.product-add-popdown');
if (cartPopdown) {
  cartPopdown.style.display = 'none';
}
/*
document.addEventListener('DOMContentLoaded', function() {
  // 1. Find the add-to-cart buttons using their class
  const addToCartButtons = document.querySelectorAll('.btn--outline.btn--full.btn--primary.btn--add-to-cart');

  // 2. Identify the cart drawer element (we know its ID is 'drawer-cart')
  const cartDrawer = document.getElementById('drawer-cart');

  // 3. Function to open the cart drawer
  const openCartDrawer = function() {
    cartDrawer.classList.add('drawer--visible');
  };

  // 4. Connect the events
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      addToCart(event);

      // 1. Wait for the cart popdown to appear
      const cartPopdown = document.querySelector('.product-add-popdown'); // Replace with the actual selector for the cart popdown
      const observer = new MutationObserver(function(mutationsList, observer) {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // 2. Cart popdown has appeared, now wait for a short delay
            setTimeout(function() {
              // 3. Trigger the click on the "View Cart" button
              const viewCartButton = document.querySelector('.product__popdown__cart[data-drawer-toggle="drawer-cart"]');
              viewCartButton.click();
              observer.disconnect(); // Stop observing after the click
            }, 500); // Adjust delay as needed
            break;
          }
        }
      });
      observer.observe(cartPopdown, {
        childList: true
      });
    });
  });
});

*/

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const looxBranding = document.querySelector('.loox-branding');
    if (looxBranding) {
      looxBranding.style.display = 'none';
    }
  }, 500); // Adjust the delay as needed
});

  // Debounced scroll listeners.  Up and down only fire on direction changes
  // These events are useful for creating sticky elements and popups.
  document.addEventListener('theme:scroll', e => { console.log(e); });
  document.addEventListener('theme:scroll:up', e => { console.log(e); });
  document.addEventListener('theme:scroll:down', e => { console.log(e); });

  // Debounced resize listener to bundle changes that trigger document reflow
  document.addEventListener('theme:resize', e => { console.log(e); });

  // Locks and unlocks page scroll for modals and drawers
  // These are commented out because firing them will lock the page scroll
  // the lock event must set `detail` to the modal or drawer body so the 
  // scroll locking code knows what element should maintain scoll. 
  // document.dispatchEvent(new CustomEvent('theme:scroll:lock', {bubbles: true, detail: scrollableInnerElement}));
  // document.dispatchEvent(new CustomEvent('theme:scroll:unlock', {bubbles: true}));


  // ^^ Keep your scripts inside this IIFE function call to avoid leaking your
  // variables into the global scope.
})();
