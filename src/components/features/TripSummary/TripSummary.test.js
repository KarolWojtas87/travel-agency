import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {

  it('should have correct adress', () => {
    const expectedId = 'abc';
    const expectedAdress = '/trip/abc';
    const component = shallow(<TripSummary id={expectedId} />);
    expect(component.find('.link').prop('to')).toEqual(expectedAdress);

  });

  it('should have correct src & alt of <img>', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'image';
    const component = shallow(<TripSummary src={expectedSrc} alt={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);

  });

  it('should render props of name, cost & days', () => {
    const expectedName = 'Name';
    const expectedCost = 'Cost';
    const expectedDays = 5;
    const component = shallow(<TripSummary />);
    expect(component.find('.title').prop('name')).toEqual(expectedName);
    expect(component.find('.details span').prop('cost')).toEqual(expectedCost);
    expect(component.find('.details span').prop('days')).toEqual(expectedDays);
  });

  it('should return error when missing id, img, name, cost & days', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags array', () => {
    const expectedTags = ['beach', 'pool', 'spa'];
    const component = shallow(<TripSummary tags={expectedTags} />);
    console.log(component.find('.tags'));
    expect(component.find('.tags span').at(0).toEqual('beach'));
    expect(component.find('.tags span').at(1).toEqual('pool'));
    expect(component.find('.tags span').at(2).toEqual('spa'));
  });

  it('should not be rendered if tags array is falsy', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags} />);
    console.log(component.find('.tags'));
    expect(component.find('.tags')).to.have.lengthOf(0);
  });

});
