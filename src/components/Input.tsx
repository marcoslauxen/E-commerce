import useCart from '../data/hooks/useCart';

export default function Input() {
  const { search, setSearch } = useCart();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <form className="form relative w-1/2">
      <button className="absolute left-1 -translate-y-1/2 top-1/2 p-1">
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
          className="w-5 h-5 text-white"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>

      <input
        className="input w-full rounded-none px-8 py-3 border-0 border-b-2 border-gray-400 outline-none placeholder-gray-400 text-white bg-transparent transition-all duration-300"
        placeholder="Pesquisar..."
        type="text"
        value={search}
        onChange={handleChange}
      />

      <button
        type="reset"
        className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </form>
  );
}
