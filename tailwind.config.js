module.exports = {
	content: ["./src/**/*.{pug,html,js}", "./Xslt/**/*.{xslt,ascx,aspx,html}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "15px",
				xl: "calc(15/1920*100*1rem)",
			},
			screens: {
				// sm: "100%",
				// md: "768px",
				lg: "1024px",
				xl: "calc(1440/1920*100*1rem)",
			},
		},
		screens: {
			//sm:..., md:...,
			xs: "375px",
			sm: "576px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"semi-2xl": "calc(1366/1920*100*1rem)",
			"2xl": "calc(1440/1920*100*1rem)",
			"3xl": "calc(1600/1920*100*1rem)",
			"4xl": "calc(1800/1920*100*1rem)",
			fullHD: "calc(1920/1920*100*1rem)",
			"2k": "calc(2048/1920*100*1rem)",
			"4k": "calc(3840/1920*100*1rem)",
			"8k": "calc(7680/1920*100*1rem)",
		},
		extend: {
			boxShadow: {
				default: "0 0 calc(20/1920*100rem) rgba(0, 0, 0, 0.1);",
				s1: "0px 8px 20px rgba(0, 0, 0, 0.1);",
				s2: "0px 0px 25px rgba(0, 0, 0, 0.1);",
				s3: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"
			},
			//bg-design
			backgroundImage: {
				design: "linear-gradient(270deg, #C68D35 0%, #ECC37E 100%);",
				linear: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);",
				linear_primary: "linear-gradient(180deg, rgba(82, 7, 4, 0) 41.98%, #490805 93.54%);"

			},

			transitionDelay: {
				//transition-delay-750,...
				250: "250ms",
				450: "450ms",
				600: "600ms",
				750: "750ms",
				900: "900ms",
				1200: "1200ms",
				1300: "1300ms",
				1500: "1500ms",
				1800: "1800ms",
				2000: "2000ms",
				2300: "2300ms",
				2500: "2500ms",
				2800: "2800ms",
				3000: "3000ms",
				3300: "3300ms",
				3500: "3500ms",
				3800: "3800ms",
				4000: "4000ms",
				4500: "4500ms",
				5000: "5000",
			},
			transitionDuration: {
				//transition-duration-750,...
				750: "750ms",
				900: "900ms",
				1200: "1200ms",
				1300: "1300ms",
				1500: "1500ms",
				1800: "1800ms",
				2000: "2000ms",
				2300: "2300ms",
				2500: "2500ms",
				2800: "2800ms",
				3000: "3000ms",
				3300: "3300ms",
				3500: "3500ms",
				3800: "3800ms",
				4000: "4000ms",
				4500: "4500ms",
				5000: "5000",
			},
			zIndex: {
				//z-1, z-2,...
				1: "1",
				2: "2",
				3: "3",
				5: "5",
			},
			lineHeight: {
				//leading-17px, leading-23px,..
				8: "calc(32/1920*100*1rem)",
				"17px": "calc(17/1920*100*1rem)",
				"18px": "calc(18/1920*100*1rem)",
				"22px": "calc(22/1920*100*1rem)",
				"23px": "calc(23/1920*100*1rem)",
				"24px": "calc(24/1920*100*1rem)",
				"25px": "calc(25/1920*100*1rem)",
				"26px": "calc(26/1920*100*1rem)",
				"27px": "calc(27/1920*100*1rem)",
				"28px": "calc(28/1920*100*1rem)",
				"30px": "calc(30/1920*100*1rem)",
				"32px": "calc(32/1920*100*1rem)",
				"33px": "calc(33/1920*100*1rem)",
				"36px": "calc(36/1920*100*1rem)",
				"38px": "calc(38/1920*100*1rem)",
				"43px": "calc(43/1920*100*1rem)",
				"48px": "calc(48/1920*100*1rem)",
				"64px": "calc(64/1920*100*1rem)",
				initial: "initial",
			},
			fontFamily: {
				//font-body
				body: ["K2D", "sans-serif"],
				Awesome6: ["'Font Awesome 6 Pro'"],
			},
			colors: {
				//bg-primary, text-t3,t6,...
				transparent: "transparent",
				primary: "#CB2026",
				secondary: "#056333",
				tertiary: "#7BAA51",
				yellow: "#ECA33B",
				Quaternary: {
					1: "#B3B674",
					2: "#79A9B6",
					3: "#E2D39D",
					4: "#96A59F",
					5: "#E9F1F1",
				},
				bg1: "#7B0004",
				bg2: "#660004",
				t2: " #FFFFFF",
				t3: "#333333",
				t6: "#666666",
				t9: "#999999",
				e1: "#e1e1e1",
				f5: "#f5f5f5",
				e8: "#e8e8e8",
				15: "#151515",
				ccc: "#ccc",
				z9: " #0180C7",
				b1: "#E0E0E0",
				e1: "#EEEEEE",
			},
			borderRadius: {
				//rounded-2and5px, rounded-5px, 10px,...
				"2and”5px": "calc(2.5/1920*100*1rem)",
				"5px": "calc(5/1920*100*1rem)",
				"10px": "calc(10/1920*100*1rem)",
			},
		},
		// fontWeight: {
		// 	300: "300",
		// 	400: "400",
		// 	500: "500",
		// 	600: '600',
		// 	700: '700',
		// },
		fontSize: {
			//text-xs -> fz:12px, l-h:16px
			0: ["0", { lineHeight: "0" }],
			xs: [
				"calc(12/1920*100*1rem)",
				{ lineHeight: "calc(16/1920*100*1rem)" },
			],
			sm: [
				"calc(14/1920*100*1rem)",
				{ lineHeight: "calc(20/1920*100*1rem)" },
			],
			base: [
				"calc(16/1920*100*1rem)",
				{ lineHeight: "calc(24/1920*100*1rem)" },
			],
			lg: [
				"calc(18/1920*100*1rem)",
				{ lineHeight: "calc(28/1920*100*1rem)" },
			],
			xl: [
				"calc(20/1920*100*1rem)",
				{ lineHeight: "calc(26/1920*100*1rem)" },
			],
			"22px": ["calc(22/1920*100*1rem)"],
			"32px": ["calc(32/1920*100*1rem)"],
			"2xl": [
				"calc(24/1920*100*1rem)",
				{ lineHeight: "calc(32/1920*100*1rem)" },
			],
			"3xl": [
				"calc(30/1920*100*1rem)",
				{ lineHeight: "calc(40/1920*100*1rem)" },
			],
			"4xl": [
				"calc(36/1920*100*1rem)",
				{ lineHeight: "calc(48/1920*100*1rem)" },
			],
			"5xl": [
				"calc(40/1920*100*1rem)",
				{ lineHeight: "calc(48/1920*100*1rem)" },
			],
			"6xl": [
				"calc(48/1920*100*1rem)",
				{ lineHeight: "calc(64/1920*100*1rem)" },
			],
			"7xl": ["calc(72/1920*100*1rem)", { lineHeight: "1" }],
			"8xl": ["calc(84/1920*100*1rem)", { lineHeight: "1" }],
			"9xl": ["calc(96/1920*100*1rem)", { lineHeight: "1" }],
			"30px": [
				"calc(30/1920*100*1rem)",
				{ lineHeight: "calc(38/1920*100*1rem)" },
			],
			"38px": [
				"calc(38/1920*100*1rem)",
				{ lineHeight: "calc(46/1920*100*1rem)" },
			],
			//custom flow layout
			"8px": [
				"calc(8/1920*100*1rem)",
				{ lineHeight: "calc(10/1920*100*1rem)" }
			],
			"16px": [
				"calc(16/1920*100*1rem)",
				{ lineHeight: "calc(19/1920*100*1rem)" }
			],
			"18px": [
				"calc(18/1920*100*1rem)",
				{ lineHeight: "calc(23/1920*100*1rem)" }
			],
			"24px": [
				"calc(24/1920*100*1rem)",
				{ lineHeight: "calc(31/1920*100*1rem)" }
			],
			"32px": [
				"calc(36/1920*100*1rem)",
				{ lineHeight: "calc(42/1920*100*1rem)" }
			],
			"36px": [
				"calc(36/1920*100*1rem)",
				{ lineHeight: "calc(47/1920*100*1rem)" }
			],
			"40px": [
				"calc(40/1920*100*1rem)",
				{ lineHeight: "calc(40/1920*100*1rem)" }
			],
			"46px": [
				"calc(46/1920*100*1rem)",
				{ lineHeight: "calc(60/1920*100*1rem)" }
			],

		},
		spacing: {
			//p-1,m-6,h-2,w-2,max-w-2,max-h-2,...
			"dynamic-screen": "100dvh",
			unset: "unset",
			0: "calc(0/1920*100*1rem) /* 0px */",
			0.5: "calc(2/1920*100*1rem) /* 2px */",
			1: "calc(4/1920*100*1rem) /* 4px */",
			"5px": "calc(5/1920*100*1rem) /* 5px */",
			1.5: "calc(6/1920*100*1rem) /* 6px */",
			"7.5px": "calc(7.5/1920*100*1rem) /* 7.5px */",
			2: "calc(8/1920*100*1rem) /* 8px */",
			"10px": "calc(10/1920*100*1rem) /* 10px */",
			2.5: "calc(10/1920*100*1rem) /* 10px */",
			"2.5px": "calc(2.5/1920*100*1rem) /* 2.5px */",
			3: "calc(12/1920*100*1rem) /* 12px */",
			"14px": "calc(14/1920*100*1rem) /* 14px */",
			"15px": "calc(15/1920*100*1rem) /* 15px */",
			4: "calc(16/1920*100*1rem) /* 16px */",
			4.5: "calc(18/1920*100*1rem) /* 18px */",
			5: "calc(20/1920*100*1rem) /* 20px */",
			"23px": "calc(23/1920*100*1rem) /* 23px */",
			6: "calc(24/1920*100*1rem) /* 24px */",
			"25px": "calc(25/1920*100*1rem) /* 25px */",
			7: "calc(28/1920*100*1rem) /* 28px */",
			"30px": "calc(30/1920*100*1rem) /* 30px */",
			8: "calc(32/1920*100*1rem) /* 32px */",
			"35px": "calc(35/1920*100*1rem) /* 35px */",
			9: "calc(36/1920*100*1rem) /* 36px */",
			10: "calc(40/1920*100*1rem) /* 40px */",
			11: "calc(44/1920*100*1rem) /* 44px */",
			12: "calc(48/1920*100*1rem) /* 48px */",
			13: "calc(50/1920*100*1rem) /* 50px */",
			"45px": "calc(45/1920*100*1rem) /* 45px */",
			"50px": "calc(50/1920*100*1rem) /* 50px */",
			"55px": "calc(55/1920*100*1rem) /* 55px */",
			14: "calc(56/1920*100*1rem) /* 56px */",
			"60px": "calc(60/1920*100*1rem) /* 60px */",
			16: "calc(64/1920*100*1rem) /* 64px */",
			"70px": "calc(70/1920*100*1rem) /* 70px */",
			"75px": "calc(75/1920*100*1rem) /* 75px */",
			20: "calc(80/1920*100*1rem) /* 80px */",
			"90px": "calc(90/1920*100*1rem) /* 90px */",
			24: "calc(96/1920*100*1rem) /* 96px */",
			"100px": "calc(100/1920*100*1rem) /* 100px */",
			27: "calc(110/1920*100*1rem) /* 110px */",
			28: "calc(112/1920*100*1rem) /* 112px */",
			"120px": "calc(120/1920*100*1rem) /* 120px */",
			32: "calc(128/1920*100*1rem) /* 128px */",
			"130px": "calc(130/1920*100*1rem) /* 130px */",
			36: "calc(144/1920*100*1rem) /* 144px */",
			40: "calc(160/1920*100*1rem) /* 160px */",
			44: "calc(176/1920*100*1rem) /* 176px */",
			48: "calc(192/1920*100*1rem) /* 192px */",
			52: "calc(208/1920*100*1rem) /* 208px */",
			56: "calc(224/1920*100*1rem) /* 224px */",
			60: "calc(240/1920*100*1rem) /* 240px */",
			64: "calc(256/1920*100*1rem) /* 256px */",
			72: "calc(288/1920*100*1rem) /* 288px */",
			80: "calc(320/1920*100*1rem) /* 320px */",
			96: "calc(384/1920*100*1rem) /* 384px */",
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("tailwindcss-textshadow"),
	],
};
