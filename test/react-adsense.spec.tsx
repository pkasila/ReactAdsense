import React from 'react';
import renderer from 'react-test-renderer';
import ReactAdsense from '../src';

describe('ReactAdsense', () => {
  it('Create instance', () => {
    const component = renderer.create(
      <ReactAdsense client="sf" slot="1" className="display-flex" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Children', () => {
    const component = renderer.create(
      <ReactAdsense client="sf" slot="1" className="display-flex">
        <p>Loading...</p>
      </ReactAdsense>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Page level ads', () => {
    const component = renderer.create(
      <ReactAdsense
        client="sf"
        slot="1"
        className="display-flex"
        pageLevelAds={true}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Push to window.adsbygoogle', () => {
    // @ts-ignore
    global.window = {
      adsbygoogle: [],
    };
    const component = renderer.create(<ReactAdsense client="sf" slot="1" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
