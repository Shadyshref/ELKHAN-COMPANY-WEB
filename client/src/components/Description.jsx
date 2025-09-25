const Description = () => {
  return (
    <section className="bg-[#070707] mt-[100px]">
      <div className="text-white flex flex-col items-center sm:w-full justify-center text-center px-4">
        <p className="text-3xl font-bold mb-8">Who are we?</p>

        <div className="relative w-full max-w-4xl">
          <img
            src="/images/photo2.png.png"
            className="w-full sm:w-[200px] md:w-[300px] lg:w-[600px] h-[600px] object-cover rounded-md"
            alt="About Us"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-6">
            <p className="text-white font-semibold text-sm md:text-base lg:text-lg leading-7 text-justify max-w-3xl">
                Al-Khan Architecture and Interior Design is a limited liability company specialized in design, engineering consultancy, and project development. Since the beginning of our operations, we have adopted a comprehensive strategy based on scientific studies, advanced technology, and innovative designs, while adhering to international standards in the design and execution of projects of all types (administrative – commercial – industrial – residential).
              
                We are particularly specialized in industrial projects, with a specific focus on automotive industry facilities, such as car showrooms and service centers. Throughout our journey in the Egyptian market, we have had the honor of working with major specialized automotive companies, as well as many renowned international dealerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
