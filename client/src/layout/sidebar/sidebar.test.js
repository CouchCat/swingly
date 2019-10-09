import React from 'react';
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import ConnectedSidebar, { Sidebar } from './sidebar.component';
import Root from '../../Root';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import * as snackBarActions from "../../redux/snackbar/snackbar.actions";

describe('Sidebar component', () => {
  let mockSetOpen = jest.fn();
  let mockIsOpen = true;
  let mockIsDarkMode = false;
  let mockCurrentUser = "asdf";
  let mockInitialEntries = "/";
  let mockOpenSnackbar = jest.fn();

  const mockHistory = createMemoryHistory({ initialEntries: [mockInitialEntries] });
  const mockProps = {
    isOpen: mockIsOpen,
    setOpen: mockSetOpen,
    currentUser: mockCurrentUser,
    history: mockHistory,
    openSnackbar: mockOpenSnackbar
  };
  
  const mountComponent = () => {
    const initialState = {
      themeMode: { 
        darkMode: mockIsDarkMode,
      },
      user: {
        currentUser: mockCurrentUser
      },
    }
    
    return mount(
      <Root initialState={initialState}>
        <MemoryRouter initialEntries={[mockInitialEntries]}>
          <ConnectedSidebar {...mockProps} />
        </MemoryRouter>
      </Root>
    );
  }

  afterEach(() => {
    mockIsOpen = true;
    mockIsDarkMode = false;
    mockCurrentUser = "asdf";
    mockInitialEntries = "/";

    jest.clearAllMocks();
  });

  it('should render the Sidebar component', () => {
    const wrapper = shallow(<Sidebar {...mockProps} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should close the Sidebar on 'All Events' click", () => {
    const wrapper = mountComponent().findWhere(el => el.text() === "All Events").first();

    wrapper.simulate("click");

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'Create Event' click", () => {
    const wrapper = mountComponent().findWhere(el => el.text() === "Create Event").first();

    wrapper.simulate("click");

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'Users' click", () => {
    const wrapper = mountComponent().findWhere(el => el.text() === "Users").first();

    wrapper.simulate("click");

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'About' click", () => {
    const wrapper = mountComponent().findWhere(el => el.text() === "About").first();

    wrapper.simulate("click");

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on 'Error Page' click", () => {
    const wrapper = mountComponent().findWhere(el => el.text() === "Error Page").first();

    wrapper.simulate("click");

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should close the Sidebar on Backdrop component click", () => {
    const backdrop = mountComponent().find("Backdrop");;

    backdrop.simulate('click');    

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("should change text of theme button from 'Dark Mode' to 'Light Mode'.", () => {
    const lastButton = mountComponent().findWhere(el => el.text() === "Dark Mode").first();
  
    lastButton.simulate('click');

    expect(lastButton.text()).toBe("Light Mode");    
  });

  it("should call the openSnackbar function when user has not signed in", () => {
    const mockProps = {
      currentUser: null,
      openSnackbar: mockOpenSnackbar,
      isOpen: mockIsOpen,
      setOpen: mockSetOpen,
      history: mockHistory,
    }
    const wrapper = shallow(<Sidebar {...mockProps} />);
    // const component = wrapper.find("SidebarButton").at(1);
    // const component = wrapper.find("SidebarButton").filterWhere(el => el.prop("data-testid") === "create-event").at(0);
    const component = wrapper.findWhere(el => el.prop("data-testid") === "create-event").first();
    // const component = wrapper.findWhere(el => el.text() === "Create Event").first();

    // console.log("comp: ", component.debug());
    
    component.simulate("click");    

    expect(mockOpenSnackbar).toHaveBeenCalledTimes(1);
  });
});