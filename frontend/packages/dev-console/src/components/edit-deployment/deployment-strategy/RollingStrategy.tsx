import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { InputField } from '@console/shared/src';
import { TextInputTypes } from '@patternfly/react-core';
import { Resources } from '../../import/import-types';
import AdvancedStrategyOptions from './advanced-options/AdvancedStrategyOptions';
import { StrategyFieldProps } from './utils/types';

const RollingStrategy: React.FC<StrategyFieldProps> = ({ resourceType }) => {
  const { t } = useTranslation();
  return (
    <>
      {resourceType === Resources.OpenShift && (
        <InputField
          name="deploymentStrategy.data.timeoutSeconds"
          label={t('devconsole~Timeout')}
          type={TextInputTypes.number}
          helpText={t(
            'devconsole~The number of seconds to wait for a pod to scale up before giving up',
          )}
        />
      )}
      <InputField
        name="deploymentStrategy.data.maxUnavailable"
        label={t('devconsole~Maximum number of unavailable Pods')}
        helpText={t(
          'devconsole~The maximum number of pods that can be unavailable during the rolling deployment. This can be either a percentage (10%) or a whole number (1).',
        )}
      />
      <InputField
        name="deploymentStrategy.data.maxSurge"
        label={t('devconsole~Maximum number of surge Pods')}
        helpText={t(
          'devconsole~The maximum number of pods that can be scheduled above the original number of pods while the rolling deployment is in progress. This can be either a percentage (10%) or a whole number (1).',
        )}
      />
      <AdvancedStrategyOptions />
    </>
  );
};

export default RollingStrategy;