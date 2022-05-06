import styled, { ServerStyleSheet } from "styled-components";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
// import { Link } from "react-router-dom";
import { BiBody, BiPlayCircle } from "react-icons/bi";
// import bg from "../assets/bg_main.jpg";

export const Lists = () => {
  const { user } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState(user ? user.lists : []);
  const [currentList, setCurrentList] = useState(
    !user ? [] : user.lists[0] ? user.lists[0] : []
  );
  const [newItem, setNewItem] = useState("");
  const history = useHistory();

  if (!user) {
    history.push("/");
  }

  const createNewList = () => {
    setLists([{ name: inputValue, items: [] }, ...lists]);
    setCurrentList({ name: inputValue, items: [] });
    setInputValue("");

    fetch("/newlist", {
      method: "PATCH",
      body: JSON.stringify({ name: inputValue, email: user.email }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => {
        console.log(err.stack);
      });
  };

  const createNewItem = (name) => {
    let listCopy = [...lists];
    // console.log(name);
    setLists(
      listCopy.map((list) => {
        // console.log(list);
        if (list.name === currentList.name) {
          return { ...list, items: [name, ...list.items] };
        } else {
          return list;
        }
      })
    );
    setNewItem("");
    setCurrentList({ ...currentList, items: [name, ...currentList.items] });

    fetch("/addnewitem", {
      method: "PATCH",
      body: JSON.stringify({ name, list: currentList.name, email: user.email }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err.stack);
      });
  };

  console.log(lists);

  return (
    <Wrap>
      <CreateNew>
        <Input
          value={inputValue}
          type="text"
          placeholder="Create a new list"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Add onClick={createNewList}>+</Add>
      </CreateNew>
      <Container>
        {lists &&
          lists.map((list) => {
            return (
              <NewList
                onClick={() => {
                  setCurrentList(list);
                }}
              >
                {list.name}
              </NewList>
            );
          })}
      </Container>
      <Divider />
      {currentList.name ? (
        <>
          <CurrentList>
            <h1>{currentList.name}</h1>
          </CurrentList>

          <CreateNew>
            <Input
              value={newItem}
              type="text"
              placeholder="New Item"
              onChange={(e) => {
                setNewItem(e.target.value);
              }}
            />
            <Add
              onClick={() => {
                createNewItem(newItem);
              }}
            >
              +
            </Add>
          </CreateNew>
          <Container>
            {currentList.items.map((listItem) => {
              // console.log(listItem);
              return (
                <NewItem>
                  {listItem}
                  <Dlt></Dlt>
                </NewItem>
              );
            })}
          </Container>
        </>
      ) : (
        <></>
      )}
    </Wrap>
  );
};

const Dlt = styled.div``;

const Container = styled.ul`
  background-color: none;
  height: 12.5rem;
  /* padding: 1rem; */
  overflow-y: auto;
`;

const NewList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  height: 2.5rem;
  border: 0px;

  :active {
    border: 0px;
  }
`;

const NewItem = styled.li`
  display: flex;
  align-items: center;
  height: 2rem;
  background: none;
  padding-left: 1rem;
  margin: 5px 0px 5px;
`;

const CurrentList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  height: 2rem;
  color: white;
  background-color: #28292c;
`;

const Divider = styled.div`
  background-color: #28292c;
  width: 100%;
  height: 1px;
`;

const Wrap = styled.div`
  /* background-color: #1a1a1a; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid #b7bc00;
  background: black;
`;

const CreateNew = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  min-height: 3rem;
  background-color: #b7bc00;
`;

const Input = styled.input`
  width: 18rem;
  height: 2.5rem;
  border: 0;
  border-radius: 0.5rem;
  padding-left: 1rem;
  margin-left: 5px;
  color: whitesmoke;
  font-size: 1.25rem;
  background: #969600;

  :focus {
    outline: none;
    cursor: pointer;
  }

  ::placeholder {
    color: black;
  }
`;

const Add = styled.button`
  display: flex;
  align-items: center;

  margin-left: 1rem;
  border: 0rem;
  border-radius: 2rem;
  color: white;
  font-size: 2rem;
  width: 2rem;
  height: 2rem;
  background-color: #abb000;

  :hover {
    color: whitesmoke;
    cursor: pointer;
    background: #a1a600;
  }
`;
