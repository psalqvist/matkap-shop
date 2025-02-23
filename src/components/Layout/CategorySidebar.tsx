import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useStore } from '@/contexts/StoreContext';

const categories = [
  { id: 'erbjudanden', name: 'Erbjudanden' },
  { id: 'kott', name: 'Kött, Fågel & Fisk' },
  { id: 'frukt', name: 'Frukt & Grönt' },
  { id: 'mejeri', name: 'Mejeri & Ost' },
  { id: 'brod', name: 'Bröd & Kakor' },
  { id: 'vegetariskt', name: 'Vegetariskt' },
  { id: 'fardigmat', name: 'Färdigmat' },
  { id: 'barn', name: 'Barn' },
  { id: 'traning', name: 'Träning' },
  { id: 'hushall', name: 'Hushåll' },
];

const CategorySidebar = () => {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { state, dispatch } = useStore();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (isMobile) {
      dispatch({ type: 'TOGGLE_SIDEBAR' });
    }
  };

  const CategoryList = () => (
    <nav className="h-full">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => handleCategoryClick(category.id)}
              className={`w-full border-t-[1px] text-left px-4 py-[18px] flex items-center justify-between group
                ${selectedCategory === category.id ? 'bg-gray-50' : 'hover:bg-gray-50'}
                transition-colors duration-200`}
            >
              <span className="text-sm font-medium text-gray-900">{category.name}</span>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  if (isMobile) {
    return (
      <Sheet open={state.isSidebarOpen} onOpenChange={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}>
        <SheetContent side="left" className="w-full p-0 bg-white">
          <SheetHeader className="p-4">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-bold">Kategorier</SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
                className="p2 h-8 w-8"
              >
                <img src="assets/icons/exit_icon.svg" className="h-8 w-8" />
              </Button>
            </div>
          </SheetHeader>
          <div className="overflow-y-auto h-[calc(100vh-5rem)]">
            <CategoryList />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="hidden lg:block">
      <aside className="w-64 bg-white rounded-xl shadow-sm">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900">Kategorier</h2>
        </div>
        <div className="overflow-y-auto max-h-[calc(100vh-12rem)]">
          <CategoryList />
        </div>
      </aside>
    </div>
  );
};

export default CategorySidebar;