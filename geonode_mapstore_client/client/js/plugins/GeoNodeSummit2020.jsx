import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import isString from 'lodash/isString';
import { getResourceByPk } from '@js/api/geonode/v2';
import Message from '@mapstore/framework/components/I18N/Message';

function GeoNodeSummit2020({
    primaryKey
}) {

    const [resourceData, setResourceData] = useState();

    useEffect(() => {
        if (primaryKey) {
            getResourceByPk(primaryKey)
                .then((response) => {
                    setResourceData(response);
                });
        }
    }, [primaryKey]);

    return (
        <div
            className="shadow"
            style={{
                position: 'absolute',
                bottom: 50,
                left: '50%',
                transform: 'translateX(-50%)',
                padding: 4,
                backgroundColor: '#ffffff',
                maxHeight: '30vh',
                overflow: 'auto'
            }}>
            {resourceData
                ? <ul>
                    {Object.keys(resourceData).map((key) => {
                        const value = resourceData[key];
                        if (isString(value)) {
                            return (
                                <li key={key}>
                                    <div><strong>{key}</strong>:</div>
                                    <div>{resourceData[key]}</div>
                                </li>
                            );
                        }
                        return null;
                    })}
                </ul>
                : <Message msgId="summit.loading"/>}
        </div>
    );
}

const ConnectedGeoNodeSummit2020 = connect((state) => ({
    primaryKey: state?.map?.present?.info?.id
}))(GeoNodeSummit2020);

export default createPlugin('GeoNodeSummit2020', {
    component: ConnectedGeoNodeSummit2020
});
