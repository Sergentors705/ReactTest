import React from "react";
import Select from "../ui/select/select";
import Input from "../ui/input/input";
import "./style.css";

function PostFilter({filter, setFilter}) {
  return (
    <div className="post-filter">
      <Input
        type="text"
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Search"
      />
      <Select
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Sorting"
        options={[
          {value: "title", name: "For title"},
          {value: "text", name: "For text"},
        ]}/>
    </div>
  )
}

export default PostFilter;
