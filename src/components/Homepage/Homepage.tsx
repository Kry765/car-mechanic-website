interface Props {
  title: string;
}

export const Homepage = ({ title }: Props) => {
  return (
    <>
      <div className="w-full h-[90vh] bg-cover bg-center bg-orange-car relative -z-20">
        <div className="bg-black w-full h-full opacity-50 absolute -z-10"></div>

        <div>
          <h1 className="flex items-center justify-start pt-40 text-white uppercase font-bold">
            {title}
          </h1>
          <button className="text-white font-bold">zarezerwuj wizyte</button>
        </div>
      </div>
    </>
  );
};
