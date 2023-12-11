import { ComponentType, useEffect, useState } from "react";

const DateTimePretty = (WrappedComponent: ComponentType<{ date: string }>) => {
  return ({ date }: { date: string }) => {
    const [formattedDate, setFormattedDtae] = useState("");

    useEffect(() => {
      formatDate(date);
    }, [date]);

    const formatDate = (date: string) => {
      const endDate = new Date(date);
      const currentDate = new Date();
      const differenceTime = currentDate.getTime() - endDate.getTime();
      const differenceDate = new Date(differenceTime);
      const formatTime =
        differenceTime / 60000 >= 60 * 24
          ? `${differenceDate.getDay()} дней назад`
          : differenceTime / 60000 < 60
            ? `${differenceDate.getHours()} часов наза`
            : `${differenceDate.getMinutes()} минут наза`;
      setFormattedDtae(formatTime);
    };

    return <WrappedComponent date={formattedDate} />;
  };
};
// (date: string) => (Component: React.ComponentType<{ date: string }>) =>
//   class extends React.Component {
//     static get displayName() {
//       const name = Component.displayName || Component.name || "Component";
//       return `WithData(${name})`;
//     }

//     componentDidMount(): void {
//       this.formatDate(date);
//     }

//     formatDate = (date: string) => {
//       const endDate = new Date(date);
//       const currentDate = new Date();
//       const differenceTime = currentDate.getTime() - endDate.getTime();
//       const differenceDate = new Date(differenceTime);
//       const formatTime =
//         differenceTime / 60000 >= 60 * 24
//           ? `${differenceDate.getDay()} дней назад`
//           : differenceTime / 60000 < 60
//             ? `${differenceDate.getHours()} часов наза`
//             : `${differenceDate.getMinutes()} минут наза`;
//       this.setState(formatTime);
//     };

//     render(): React.ReactNode {
//       return <Component date={date} {...this.state} />;
//     }
// };

export default DateTimePretty;
