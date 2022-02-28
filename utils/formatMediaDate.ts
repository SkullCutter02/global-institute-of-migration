import { format, parseISO } from "date-fns";

type Options = { includeYear: boolean };

const formatMediaDate = (dateStr: string, { includeYear }: Options = { includeYear: false }) => {
  return format(parseISO(dateStr), `MMM dd${includeYear ? " yyyy" : ""}`);
};

export default formatMediaDate;
