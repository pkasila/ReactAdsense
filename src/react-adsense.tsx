import React, { ReactNode } from 'react';
import { Props } from './props';

export default class ReactAdsense extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  static defaultProps = {
    className: '',
    style: { display: 'block' },
    client: undefined,
    slot: undefined,
    layout: '',
    layoutKey: '',
    format: 'auto',
    responsive: 'false',
    pageLevelAds: false,
    adTest: undefined,
    children: undefined,
  };

  componentDidMount(): void {
    this.handleUpdate();
  }

  componentDidUpdate(): void {
    this.handleUpdate();
  }

  handleUpdate(): void {
    const p: {
      google_ad_client?: any;
      enable_page_level_ads?: any;
    } = {};
    if (this.props.pageLevelAds) {
      p.google_ad_client = this.props.client;
      p.enable_page_level_ads = true;
    }

    if (typeof window !== 'undefined') {
      // not SSR
      try {
        (window.adsbygoogle || []).push(p);
      } catch {
        // Just ignore the error
      }
    }
  }

  render(): ReactNode {
    const {
      className,
      style,
      client,
      slot,
      layout,
      layoutKey,
      format,
      responsive,
      adTest,
      children,
      ...rest
    } = this.props;

    this.handleUpdate();

    return (
      <ins
        className={`adsbygoogle ${className ?? ''}`}
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive={responsive}
        data-adtest={adTest}
        {...rest}
      >
        {children}
      </ins>
    );
  }
}
