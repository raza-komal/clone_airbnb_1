import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchInfo from "../components/SearchInfo";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { endDate, startDate, numberGuest, location } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  const data = JSON.parse(searchResults).search;
  console.log(data);
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberGuest} Guests`} />
      {/* Search Result */}

      <main className="flex">
        <section className="flex-grow  pt-14 px-16">
          <p className="text-xs">
            300+ Stays in {range} for {numberGuest} Guests
          </p>
          <h1 className="text-2xl font-semibold mt-2 mb-6">
            Stays at {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellaion Flexibilty</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More Fflters</p>
          </div>

          <div className="flex flex-col">
            {data.map((item, index) => (
              <SearchInfo key={index} item={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("http://localhost:3000/api/search").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
