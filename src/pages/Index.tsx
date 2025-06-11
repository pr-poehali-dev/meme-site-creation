import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import YearFilter from "@/components/YearFilter";
import MemeGrid from "@/components/MemeGrid";
import { useMemeFilter } from "@/hooks/useMemeFilter";

const Index = () => {
  const {
    filteredMemes,
    selectedYear,
    setSelectedYear,
    searchQuery,
    setSearchQuery,
    years,
    totalMemes,
    filteredCount,
  } = useMemeFilter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Мемы 2010-2024
            </h1>
            <p className="text-gray-600 text-lg">
              История интернет-культуры за 15 лет
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-6 relative">
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="text"
              placeholder="Поиск мемов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/70 border-purple-200 focus:border-purple-400"
            />
          </div>

          {/* Year Filter */}
          <YearFilter
            years={years}
            selectedYear={selectedYear}
            onYearSelect={setSelectedYear}
          />

          {/* Stats */}
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Badge
                variant="outline"
                className="bg-purple-50 border-purple-200"
              >
                {filteredCount} из {totalMemes}
              </Badge>
              <span>мемов</span>
            </div>
            {selectedYear && (
              <div className="flex items-center gap-1">
                <Icon name="Calendar" size={16} />
                <span>Год: {selectedYear}</span>
              </div>
            )}
            {searchQuery && (
              <div className="flex items-center gap-1">
                <Icon name="Search" size={16} />
                <span>"{searchQuery}"</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <MemeGrid memes={filteredMemes} />
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-purple-100 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-600 mb-2">Музей интернет-мемов • 2010-2024</p>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
            <Icon name="Heart" size={16} className="text-red-400" />
            <span>Создано с любовью к мемной культуре</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
