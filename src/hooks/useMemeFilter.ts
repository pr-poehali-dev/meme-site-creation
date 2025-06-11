import { useState, useMemo } from "react";
import { memes, type Meme } from "@/data/memes";

export const useMemeFilter = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMemes = useMemo(() => {
    let filtered = memes;

    // Filter by year
    if (selectedYear) {
      filtered = filtered.filter((meme) => meme.year === selectedYear);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (meme) =>
          meme.title.toLowerCase().includes(query) ||
          meme.description.toLowerCase().includes(query) ||
          meme.category.toLowerCase().includes(query),
      );
    }

    // Sort by popularity (highest first)
    return filtered.sort((a, b) => b.popularity - a.popularity);
  }, [selectedYear, searchQuery]);

  const years = useMemo(() => {
    const uniqueYears = [...new Set(memes.map((meme) => meme.year))];
    return uniqueYears.sort((a, b) => b - a); // Latest first
  }, []);

  return {
    filteredMemes,
    selectedYear,
    setSelectedYear,
    searchQuery,
    setSearchQuery,
    years,
    totalMemes: memes.length,
    filteredCount: filteredMemes.length,
  };
};
