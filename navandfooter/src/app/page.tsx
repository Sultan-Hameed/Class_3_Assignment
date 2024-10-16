import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="font-semibold text-center text-lg mt-3">Welcome To Home Page</h1>
        <h2 className=" w-fit  font-semibold text-center text-lg mt-5 bg-orange-400 rounded-lg px-2 ">Our Products</h2>
        <div className="flex justify-center gap-12 text-center	items-center font-semibold  ">
          <div className="font-bold bg-orange-400 w-52 mt-10 h-48 text-lg rounded-3xl">
            <p>Product 1</p>
          </div>
          <div className="font-bold bg-orange-400 w-52 mt-10 h-48 text-lg rounded-3xl" >
            <p>Product 2</p>
          </div>
          <div className="font-bold bg-orange-400 w-52 mt-10 h-48 text-lg rounded-3xl">
            <p>Product 3</p>
          </div>
        </div>
      </section>

    </>
  );
}
