import * as React from 'react';
import './index.css';
import Datafeed from './api/'


export class TVChartContainer extends React.PureComponent {

	static defaultProps = {
		symbol: 'Coinbase:BTC/USD',
		interval: '15',
		containerId: 'tv_chart_container',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
	};

	componentDidMount() {
		const widgetOptions = {
			debug: false,
			symbol: this.props.symbol,
			datafeed: Datafeed,
			interval: this.props.interval,
			container_id: this.props.containerId,
			library_path: this.props.libraryPath,
			locale: "ru",
			disabled_features: ["use_localstorage_for_settings"],
			enabled_features: ["study_templates"],
			overrides: {
				// "mainSeriesProperties.showCountdown": true,
				"paneProperties.background": "#131722",
				"paneProperties.vertGridProperties.color": "#363c4e",
				"paneProperties.horzGridProperties.color": "#363c4e",
				"symbolWatermarkProperties.transparency": 90,
				"scalesProperties.textColor": "#AAA",
				"mainSeriesProperties.candleStyle.wickUpColor": "#336854",
				"mainSeriesProperties.candleStyle.wickDownColor": "#7f323f"
			}
		};

		const widget = (window.tvWidget = new window.TradingView.widget(
			widgetOptions
		));

		widget.onChartReady(() => {
			console.log("Chart has loaded!");
		});
	}

	render() {
		return (
			<div
				id={ this.props.containerId }
				className={ 'TVChartContainer' }
			/>
		);
	}
}
