import { GridPostList, Loader } from "@/components/shared";
import { Models } from "appwrite";

// TypeScript
type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[]; // or any
};

//!
const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultProps) => {
  if (isSearchFetching) {
    return <Loader />;
  } else if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  } else {
    return (
      <p className="w-full mt-10 text-center text-light-4">No results found</p>
    );
  }
};
export default SearchResults;
