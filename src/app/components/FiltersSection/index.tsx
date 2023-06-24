interface FilterSectionProps {
  title: string;
  filters: string[];
}

const FilterSection = ({ title, filters }: FilterSectionProps) => {
  return (
    <div className="flex flex-col p-4 gap-2">
      <h3 className="font-extrabold">{title}</h3>
      <div className="flex flex-col gap-0 text-gray-500 p-2">
        {filters.map((filter) => (
          <span key={filter}>{filter}</span>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
