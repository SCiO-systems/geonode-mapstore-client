/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
// geonode specific epics
import epics from "@js/epics";
import { extendPluginsDefinition } from "@extend/jsapi/plugins";

import AddGroupPlugin from '@mapstore/framework/plugins/AddGroup';
import IdentifyPlugin from '@mapstore/framework/plugins/Identify';
import TOCPlugin from '@mapstore/framework/plugins/TOC';
import MapPlugin from '@mapstore/framework/plugins/Map';
import ToolbarPlugin from '@mapstore/framework/plugins/Toolbar';
import DrawerMenuPlugin from '@mapstore/framework/plugins/DrawerMenu';
import ZoomAllPlugin from '@mapstore/framework/plugins/ZoomAll';
import MapLoadingPlugin from '@mapstore/framework/plugins/MapLoading';
import OmniBarPlugin from '@mapstore/framework/plugins/OmniBar';
import BackgroundSelectorPlugin from '@mapstore/framework/plugins/BackgroundSelector';
import FullScreenPlugin from '@mapstore/framework/plugins/FullScreen';
import ZoomInPlugin from '@mapstore/framework/plugins/ZoomIn';
import ZoomOutPlugin from '@mapstore/framework/plugins/ZoomOut';
import ExpanderPlugin from '@mapstore/framework/plugins/Expander';
import BurgerMenuPlugin from '@mapstore/framework/plugins/BurgerMenu';
import HistoryPlugin from '@mapstore/framework/plugins/History';
import ScaleBoxPlugin from '@mapstore/framework/plugins/ScaleBox';
import MapFooterPlugin from '@mapstore/framework/plugins/MapFooter';
import PrintPlugin from '@mapstore/framework/plugins/Print';
import MeasurePlugin from '@mapstore/framework/plugins/Measure';
import FilterLayerPlugin from '@mapstore/framework/plugins/FilterLayer';
import TOCItemsSettingsPlugin from '@mapstore/framework/plugins/TOCItemsSettings';
import WidgetsPlugin from '@mapstore/framework/plugins/Widgets';
import WidgetsBuilderPlugin from '@mapstore/framework/plugins/WidgetsBuilder';
import WidgetsTrayPlugin from '@mapstore/framework/plugins/WidgetsTray';
import NotificationsPlugin from '@mapstore/framework/plugins/Notifications';
import FeatureEditorPlugin from '@mapstore/framework/plugins/FeatureEditor';
import QueryPanelPlugin from '@mapstore/framework/plugins/QueryPanel';
import MetadataExplorerPlugin from '@mapstore/framework/plugins/MetadataExplorer';
import GridContainerPlugin from '@mapstore/framework/plugins/GridContainer';
import StyleEditorPlugin from '@mapstore/framework/plugins/StyleEditor';
import TimelinePlugin from '@mapstore/framework/plugins/Timeline';
import PlaybackPlugin from '@mapstore/framework/plugins/Playback';
import MousePositionPlugin from '@mapstore/framework/plugins/MousePosition';
import SearchPlugin from '@mapstore/framework/plugins/Search';
import SearchServicesConfigPlugin from '@mapstore/framework/plugins/SearchServicesConfig';
import SwipePlugin from '@mapstore/framework/plugins/Swipe';
import LocatePlugin from '@mapstore/framework/plugins/Locate';

import GeoNodeSummit2020Plugin from '@js/plugins/GeoNodeSummit2020';

import SavePlugin from '@js/plugins/Save';
import SaveAsPlugin from '@js/plugins/SaveAs';
import SharePlugin from '@js/plugins/Share';

import security from '@mapstore/framework/reducers/security';
import maps from '@mapstore/framework/reducers/maps';
import maplayout from '@mapstore/framework/reducers/maplayout';

import ReactSwipe from 'react-swipeable-views';
import SwipeHeader from '@mapstore/framework/components/data/identify/SwipeHeader';

const pluginsDefinition = {
    plugins: {
        AddGroupPlugin,
        IdentifyPlugin,
        TOCPlugin,
        MapPlugin,
        ToolbarPlugin,
        DrawerMenuPlugin,
        ZoomAllPlugin,
        MapLoadingPlugin,
        OmniBarPlugin,
        BackgroundSelectorPlugin,
        FullScreenPlugin,
        ZoomInPlugin,
        ZoomOutPlugin,
        ExpanderPlugin,
        BurgerMenuPlugin,
        UndoPlugin: HistoryPlugin,
        RedoPlugin: HistoryPlugin,
        ScaleBoxPlugin,
        MapFooterPlugin,
        PrintPlugin,
        MeasurePlugin,
        FilterLayerPlugin,
        TOCItemsSettingsPlugin,
        WidgetsPlugin,
        WidgetsBuilderPlugin,
        WidgetsTrayPlugin,
        NotificationsPlugin,
        FeatureEditorPlugin,
        QueryPanelPlugin,
        SavePlugin,
        SaveAsPlugin,
        MetadataExplorerPlugin,
        GridContainerPlugin,
        StyleEditorPlugin,
        TimelinePlugin,
        PlaybackPlugin,
        MousePositionPlugin,
        SearchPlugin,
        SearchServicesConfigPlugin,
        SwipePlugin,
        LocatePlugin,
        SharePlugin,
        GeoNodeSummit2020Plugin,
        AddReducersAndEpics: {
            reducers: {
                security,
                maps,
                maplayout
            },
            epics
        }
    },
    requires: {
        ReactSwipe,
        SwipeHeader
    }
};

const extendedPluginsDefinition = extendPluginsDefinition
    ? extendPluginsDefinition(pluginsDefinition)
    : pluginsDefinition;

export default extendedPluginsDefinition;
