import { useMemo } from "react";

type FilterOptions<T> = {
  items: T[];
  search: string;
  filter: string;
  searchField: keyof T;
  dateField: keyof T;
  statusField?: keyof T;
};

export function useListFilter<T>({
  items,
  search,
  filter,
  searchField,
  dateField,
  statusField,
}: FilterOptions<T>) {

  const filteredItems = useMemo(() => {
    return items
      .filter(item =>
        String(item[searchField])
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .filter(item => {
        if (!statusField) return true;

        if (filter === "abertas") return item[statusField] === "aberto";
        if (filter === "fechadas") return item[statusField] === "fechado";

        return true;
      })
      .sort((a, b) => {
        if (filter === "recentes") {
          return (
            new Date(b[dateField] as string).getTime() -
            new Date(a[dateField] as string).getTime()
          );
        }

        if (filter === "antigas") {
          return (
            new Date(a[dateField] as string).getTime() -
            new Date(b[dateField] as string).getTime()
          );
        }

        return 0;
      });

  }, [items, search, filter, searchField, dateField, statusField]);

  return { filteredItems };
}
