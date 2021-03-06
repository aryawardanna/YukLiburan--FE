import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import React, { Component } from 'react';
import ItemDetails from 'json/itemDetails.json';

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = 'Details Page';
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
      </>
    );
  }
}
