import axios from "axios";
import React, { useCallback, useState } from "react";
import Search from "../components/Search";
import Button from "../components/Button";
import GithubRepoList from "../components/GithubRepoList";

const SearchPage = () => {
  const [ghUserRepos, setGhUserRepos] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<any[]>([]);

  const onChange = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const onSearch = useCallback(async () => {
    const response = await axios({
      url: `https://api.github.com/users/${searchTerm}/repos`,
    });
    const repos = response.data.map((repo) => ({ name: repo.name }));
    console.log(repos);
    setGhUserRepos(repos);
  }, [searchTerm]);

  const onGithubRepoListChange = useCallback((newList) => {
    setGhUserRepos(newList);
  }, []);

  const onClickRemove = useCallback(() => {
    const notCheckedRepos = ghUserRepos.filter((repo) => !repo.checked);
    setGhUserRepos(notCheckedRepos);
  }, [ghUserRepos]);

  return (
    <div>
      <Search onChange={onChange}></Search>
      <Button onClick={onSearch}>Search</Button>
      <GithubRepoList items={ghUserRepos} onChange={onGithubRepoListChange} />
      <Button onClick={onClickRemove}>Remove checked</Button>
    </div>
  );
};

export default SearchPage;
