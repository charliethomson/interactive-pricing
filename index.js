const { ref, computed } = Vue;

const App = {
  setup() {
    const sliderValue = ref(1600);
    let monthlyBilling = ref(true);
    const billingCycle = computed(() =>
      monthlyBilling.value ? "month" : "year"
    );
    const price = computed(
      () =>
        (monthlyBilling.value
          ? sliderValue.value
          : 12 * Math.round(sliderValue.value - sliderValue.value * 0.25)) / 100
    );
    const numPageViews = computed(
      () =>
        [
          [800, "10K"],
          [1200, "50K"],
          [1600, "100K"],
          [2400, "500K"],
          [3600, "1M"],
        ].find(([i, _]) => parseInt(i) >= sliderValue.value)[1]
    );
    const toggleBillingCycle = () =>
      (monthlyBilling.value = !monthlyBilling.value);

    const checkedItems = [
      "Unlimited websites",
      "100% data ownership",
      "Email Reports",
    ];

    return {
      sliderValue,
      monthlyBilling,
      numPageViews,
      billingCycle,
      price,
      toggleBillingCycle,
      checkedItems,
    };
  },
};

Vue.createApp(App).mount("main");
