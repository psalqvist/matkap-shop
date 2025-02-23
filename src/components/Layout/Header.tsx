import { Search } from 'lucide-react';
import { useStore } from '@/contexts/StoreContext';
import { Button } from '../ui/button';

const Header = () => {
  const { state, dispatch } = useStore();
  const cartItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky lg:px-[100px] px-[20px] top-0 z-50 bg-white">
      <div>
        <div className="flex flex-col py-4">
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              className="lg:hidden p-2 w-8 h-8"
              onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
            >
              <img src="/assets/icons/burger.svg" alt="Menu" />
            </Button>

            <div className="flex items-center gap-4 lg:pl-[5px]">
              <img src="/assets/icons/ica_logo.svg" alt="ICA Logo" className="h-[26px]" />
              <span className="text-sm font-semibold">{"ICA Nära Laduvägen"}</span>
            </div>

            <Button
              variant="ghost"
              className="p-2 relative"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            >
              <img src="/assets/icons/cart.svg" alt="Cart" className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-ica-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>

          <div className="mt-4 lg:mt-0 lg:absolute lg:left-[394px] lg:top-1/2 lg:-translate-y-1/2 lg:w-[376px]">
            <div className="relative">
              <input
                type="search"
                placeholder="Sök bland tusentals varor"
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F5F5F5] focus:outline-none placeholder-[#898E8F] [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-cancel-button]:h-4 [&::-webkit-search-cancel-button]:w-4 [&::-webkit-search-cancel-button]:bg-[#333333] [&::-webkit-search-cancel-button]:cursor-pointer"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#898E8F]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;