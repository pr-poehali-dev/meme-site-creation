import { Button } from "@/components/ui/button";

interface YearFilterProps {
  years: number[];
  selectedYear: number | null;
  onYearSelect: (year: number | null) => void;
}

const YearFilter = ({ years, selectedYear, onYearSelect }: YearFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Button
        variant={selectedYear === null ? "default" : "outline"}
        onClick={() => onYearSelect(null)}
        className="text-sm font-medium"
      >
        Все годы
      </Button>
      {years.map((year) => (
        <Button
          key={year}
          variant={selectedYear === year ? "default" : "outline"}
          onClick={() => onYearSelect(year)}
          className="text-sm font-medium"
        >
          {year}
        </Button>
      ))}
    </div>
  );
};

export default YearFilter;
