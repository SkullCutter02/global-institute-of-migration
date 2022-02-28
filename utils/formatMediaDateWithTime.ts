import { format, parseISO } from "date-fns";

const formatMediaDateWithTime = (dateStr: string) => {
  return format(parseISO(dateStr), "HH:mm MMM dd yyyy");
};

export default formatMediaDateWithTime;
