import { Logo } from "../Logo/Logo";

interface Props {
  items: string[];
}

export const TopMenu = ({ items }: Props) => {
  return (
    <div className="flex justify-center w-full fixed top-0 z-10 bg-white uppercase">
      <Logo />
      {items.map((item, index) => (
        <div className="p-4 m-auto" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
