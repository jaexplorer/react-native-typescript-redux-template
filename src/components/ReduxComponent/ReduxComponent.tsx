import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { loadExample, LoadExampleResult } from '../../lib/Redux/Actions/example';
import { ApplicationState } from '../../lib/Redux/Store';
import { useTheme } from '../../lib/Theme';
import { Example } from '../../lib/Types';
import stylesCreator from './ReduxComponentStyles';

const ReduxComponent: FC<ReduxComponentProps> = ({ loading, examples, onLoadExample }) => {
  const [styles] = useTheme(stylesCreator);
  useEffect(() => {
    onLoadExample('123');
  }, []);

  return (
    <View style={styles.exampleContainer}>
      {loading ? (
        <View />
      ) : (
        <View>
          {examples.map((item) => (
            <View key={item.id} />
          ))}
        </View>
      )}
    </View>
  );
};

export interface ReduxComponentProps {
  loading: boolean;
  examples: Example[];
  onLoadExample: (exampleId: string | number) => LoadExampleResult;
}

const mapStateToProps = ({ loadingState, exampleState }: ApplicationState) => ({
  loading: loadingState.apiLoading,
  examples: exampleState.examples,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onLoadExample: loadExample as any,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
