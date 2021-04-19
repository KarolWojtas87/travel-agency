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
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);

  });

  it('should render props of name, cost & days', () => {
    const expectedName = 'Name';
    const expectedCost = 'from $139';
    const expectedDays = '7 days';
    const component = shallow(<TripSummary cost='$139' name={expectedName} days={7} />);
    const renderedName = component.find('.title').text();
    const renderedCost = component.find('.details span').at(1).text();
    const renderedDays = component.find('.details span').at(0).text();
    expect(renderedName).toEqual(expectedName);
    expect(renderedCost).toEqual(expectedCost);
    expect(renderedDays).toEqual(expectedDays);
  });

  it('should return error when missing id, img, name, cost & days', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags array', () => {
    // const expectedTags = ['beach', 'pool', 'spa'];
    const component = shallow(<TripSummary tags={['beach', 'pool', 'spa']} />);

    expect(component.find('.tags').at(0).text().toEqual('beach'));
    expect(component.find('.tags').at(1).text().toEqual('pool'));
    expect(component.find('.tags').at(2).text().toEqual('spa'));
  });

  it('should not be rendered if tags array is falsy', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component.find('.tags')).to.have.lengthOf(0);
  });

});
