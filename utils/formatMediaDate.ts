import { format, parseISO } from "date-fns";

const formatMediaDate = (dateStr: string) => {
  return format(parseISO(dateStr), "MMM dd");
};

export default formatMediaDate;
