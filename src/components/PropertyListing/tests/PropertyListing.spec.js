import React from "react";
import { act } from "react-dom/test-utils";
import { mount, shallow } from "enzyme";
import PropertyListing from "../PropertyListing";
import PropertyCard from "../../PropertyCard";

const mockProperties = [
  {
    id: 73864112,
    bedrooms: 3,
    summary: "Situated moments from the River Thames in Old Chelsea...",
    displayAddress: "CHEYNE WALK, CHELSEA, SW3",
    propertyType: "Flat",
    price: 1950000,
    branchName: "M2 Property, London",
    propertyUrl: "/property-for-sale/property-73864112.html",
    contactUrl: "/property-for-sale/contactBranch.html?propertyId=73864112",
    propertyTitle: "3 bedroom flat for sale",
    mainImage:
      "https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg",
  },
  {
    id: 73864115,
    bedrooms: 3,
    summary: "Situated moments from the River Thames in Old Chelsea...",
    displayAddress: "CHEYNE WALK, CHELSEA, SW3",
    propertyType: "Flat",
    price: 1950000,
    branchName: "M2 Property, London",
    propertyUrl: "/property-for-sale/property-73864112.html",
    contactUrl: "/property-for-sale/contactBranch.html?propertyId=73864112",
    propertyTitle: "3 bedroom flat for sale",
    mainImage:
      "https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg",
  },
];

describe("PropertyListing", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<PropertyListing />);

    expect(wrapper).toHaveLength(1);
  });

  it("should render children when fetching data", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({ json: () => Promise.resolve(mockProperties) });
    });

    const wrapper = mount(<PropertyListing />);
    await act(async () => {
      await Promise.resolve();
    });
    wrapper.update();

    expect(wrapper.containsMatchingElement(<PropertyCard />)).toEqual(true);
  });
});
