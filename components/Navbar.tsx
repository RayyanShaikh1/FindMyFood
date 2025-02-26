import SearchBar from "@/components/SearchBar";

const Navbar: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "20px" }}>MyApp</h1>
      <SearchBar onSearch={handleSearch} />
    </nav>
  );
};

export default Navbar;
