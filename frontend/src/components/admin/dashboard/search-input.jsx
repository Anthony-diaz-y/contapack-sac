import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
      />
    </div>
  );
};

export default SearchInput;
