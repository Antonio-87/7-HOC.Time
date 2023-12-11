import { ComponentType, useEffect, useState } from "react";

const DateTimePretty = (WrappedComponent: ComponentType<{ date: string }>) => {
  return ({ date }: { date: string }) => {
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
      formatDate(date);
    }, [date]);

    const formatDate = (date: string) => {
      const endDate = new Date(date);
      const currentDate = new Date();
      const differenceTime = (currentDate.getTime() - endDate.getTime()) / 1000;
      const formatTime =
        differenceTime >= 86400
          ? `${Math.floor(differenceTime / 86400)} дней назад`
          : differenceTime > 1440
            ? `${Math.floor(differenceTime / 1440)} часов назад`
            : `${Math.floor(differenceTime / 3600)} минут назад`;
      setFormattedDate(formatTime);
    };

    return <WrappedComponent date={formattedDate} />;
  };
};

export default DateTimePretty;
