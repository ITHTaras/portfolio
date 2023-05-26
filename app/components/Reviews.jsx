import data from "@/data";

function Reviews() {
  // Vars to render reviews
  let a, b;

  // const [page, setPage] = useState(2);
  // const [itemsPerPage, setItemsPerPage] = useState(3);

  // const lastItemId = page * itemsPerPage;
  // const firstItemId = lastItemId - itemsPerPage;

  // const currentItems = data.reviews.slice(firstItemId, lastItemId);

  return (
    <div className="text-gray-300 xs:px-8 sm:px-0 xl:px-32 mt-24">
      <div className="text-center">
        <h1 className="text-4xl text-gray-200 font-bold">Kind Words</h1>
        <p className="text-xl mt-3">
          See what my clients have to say about working with me
        </p>
      </div>
      {/* Reviews */}
      <div className="mt-10 xl:grid xl:grid-cols-12 gap-7">
        {data.reviews.map((review, id) => {
          if (id % 2 !== 0) {
            a = data.reviews[id - 1];
            b = data.reviews[id];

            return (
              <div key={id} className="xl:col-span-7 h-full">
                <div className="flex flex-col justify-between grid-rows-2 gap-y-8 h-full">
                  <div className="p-10 flex flex-col justify-between border-solid border-[0.5px] border-gray-600 rounded-xl bg-[#1F2937] bg-opacity-40">
                    <p className="text-lg">{a.text}</p>
                    <h5 className="text-2xl font-bold mt-14">{a.name}</h5>
                  </div>
                  <div className="p-10 flex flex-col justify-between border-solid border-[0.5px] border-gray-600 rounded-xl bg-[#1F2937] bg-opacity-40">
                    <p className="text-lg">{b.text}</p>
                    <h5 className="text-2xl font-bold mt-14">{b.name}</h5>
                  </div>
                </div>
              </div>
            );
          } else {
            if (a) {
              return (
                <div
                  key={id}
                  className="mt-8 xl:mt-0 p-10 col-span-5 flex flex-col justify-between border-solid border-[0.5px] border-gray-600 rounded-xl bg-[#1F2937] bg-opacity-40"
                >
                  <p className="text-lg">{review.text}</p>
                  <h5 className="text-2xl font-bold">{review.name}</h5>
                </div>
              );
            }
          }
        })}
      </div>
      <div className="grid sm:grid-cols-3 rounded-xl bg-[#6C4BEF] py-10 mt-8">
        <div className="text-center sm:border-r border-r-white border-opacity-30">
          <h2 className="text-gray-200 text-4xl font-bold">5</h2>
          <h4 className="text-base mt-3">Years Of Experience</h4>
        </div>
        <hr
          style={{ height: 1 }}
          className="sm:hidden w-24 mx-auto my-10 border-none bg-gray-300 bg-opacity-50"
        />
        <div className="text-center sm:border-r border-r-white border-opacity-30">
          <h2 className="text-gray-200 text-4xl font-bold">300+</h2>
          <h4 className="text-base mt-3">Freelance Projects</h4>
        </div>
        <hr
          style={{ height: 2 }}
          className="sm:hidden w-24 mx-auto my-10 border-none bg-gray-300 bg-opacity-50"
        />
        <div className="text-center">
          <h2 className="text-gray-200 text-4xl font-bold">100%</h2>
          <h4 className="text-base mt-3">Customer Satisfaction</h4>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
