import withLogging from "./withLogging";

const example2 = () => {
  const obj = {
    x: 10,
    add(value: number) {
      return this.x + value;
    },
  };

  obj.add = withLogging(obj.add) as (value: number) => number;

  console.log(obj.add(5)); // 15

  function add(value: number): number {
    return 10 + value;
  }

  const addWithLogging = withLogging(add);

  addWithLogging(10); // 20
};

export default example2;
