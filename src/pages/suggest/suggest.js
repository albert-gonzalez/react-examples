import React, { Component } from 'react';
import Hero from '../../components/hero/hero';
import Section from '../../components/section/section';
import SuggestContainer from '../../containers/suggest/suggest';

class SuggestPage extends Component {
  render() {
    return (
      <div>
        <Hero>
          Suggest example
          <span className="emoji" role="img" aria-label="search">
            🔍
          </span>
        </Hero>
        <Section>
          <h2 className="title is-4">
            Search in <a href="https://openlibrary.org"> openlibray database</a>:
          </h2>
          <div className="columns">
            <div className="column">
              <label className="label">Suggest input:</label>
              <SuggestContainer
                instance="suggest"
                queryParam="q"
                url="//openlibrary.org/search.json"
                resultTransformer={data => {
                  return data.data.docs
                    .filter(
                      result =>
                        result.title &&
                        result.author_name &&
                        result.publish_year
                    )
                    .map(result => {
                      return {
                        name: `${result.title}, ${result.author_name[0]} (${
                          result.first_publish_year
                        })`
                      };
                    });
                }}
              />
            </div>
          </div>
          <hr />
        </Section>
      </div>
    );
  }
}
export default SuggestPage;
