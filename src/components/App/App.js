// import { Component } from "react";
import { Wrapper } from "../Wrapper/Wrapper.styles";
import Form from "../Form";
import SectionTitle from "../SectionTitle";
import ContactsList from "../Contacts";
import Filter from "../Filter";
// import { connect } from 'react-redux';
// import *as actions from '../../redux/actions'

function App() {
  return (
    <Wrapper>
      <SectionTitle title="Phonebook">
        <Form />
      </SectionTitle>

      <SectionTitle title="Contacts">
        <Filter />
        <ContactsList />
      </SectionTitle>
    </Wrapper>
  );
}

// const mapStateToProps = state => state;

// const mapDispatchToProps = dispatch => {
//   return {
//     formSubmitHandler: (dataSubmit) => dispatch(actions.formSubmitHandler(dataSubmit)),
//     filterChange: (evt) => dispatch(actions.filterChange(evt)),
//     onDeleteContact: (id) => dispatch(actions.onDeleteContact(id)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
