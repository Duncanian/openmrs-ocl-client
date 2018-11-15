import React from 'react';
import { shallow } from 'enzyme';
import ExternalMapping from '../../../components/dictionaryConcepts/components/ExternalMapping';

let wrapper;
let props;

describe('render MappingModal', () => {
  beforeEach(() => {
    props = {
      map_type: '',
      term: '',
      source_url: '',
      code: '',
      handleChange: jest.fn(),
    };
    wrapper = shallow(<ExternalMapping {...props} />);
  });
  it('should render without breaking', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should handle input change', () => {
    const event = {
      target: {
        name: 'type',
        value: 'test',
      },
    };
    wrapper.find('#map_type').simulate('change', event);
    expect(props.handleChange).toHaveBeenCalled();
  });
});
