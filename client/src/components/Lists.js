import styled, { ServerStyleSheet } from "styled-components";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";
import { BiBody, BiPlayCircle } from "react-icons/bi";
import bg from "../assets/bg_main.jpg";

export const Lists = () => {
  const { user } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [lists, setLists] = useState(user.lists ? user.lists : []);
  const [currentList, setCurrentList] = useState(
    user.lists[0] ? user.lists[0] : []
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
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.stack);
      });
  };

  const createNewItem = (name) => {
    let listCopy = [...lists];
    console.log(name);
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
        console.log(data);
      })
      .catch((err) => {
        console.log(err.stack);
      });
  };

  console.log(lists, currentList);

  return (
    <Wrap>
      <Subheader>
        <Input
          value={inputValue}
          type="text"
          placeholder="NEW LIST"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Add onClick={createNewList}>+</Add>
      </Subheader>
      <Container>
        {lists.map((list) => {
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
              return <NewItem>{listItem}</NewItem>;
            })}
          </Container>
        </>
      ) : (
        <></>
      )}
      <PgTab />
    </Wrap>
  );
};

const CreateNew = styled.div`
  background-color: olive;
`;

const Container = styled.ul`
  background-color: none;
  height: 12.5rem;
  /* padding: 1rem; */
  overflow-y: scroll;
`;

const NewList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  height: 2.5rem;
  :hover {
    cursor: pointer;
    background-color: #0f0f0f;
  }
`;

const NewItem = styled.li`
  height: 2rem;
  background: none;
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
  background-color: #b7bc00;
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
  background-color: black;
  background-position-y: center;
  background-position-x: center;
`;

const Subheader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  height: 2.5rem;
  background-color: #b7bc00;
`;

const Input = styled.input`
  width: 18rem;
  height: 100%;
  border: 0;
  padding-left: 1rem;
  background: none;
  font-size: 1.25rem;
  color: black;

  ::placeholder {
    color: black;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const Add = styled.button`
  background-color: red;
  margin-left: 1rem;
  border: 0rem;
  border-radius: 1.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  width: 2rem;
  height: 2rem;

  :hover {
    color: black;
    cursor: pointer;
  }
`;

const PgTab = styled.div`
  width: 7.5rem;
  height: 0.188rem;
  background-color: #b7bc00;
`;
