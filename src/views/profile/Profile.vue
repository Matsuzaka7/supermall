<template>
  <div>
    <h2>我的</h2>
    <scroll class="content" :probeType="2" @scroll="scrollClick">
      <ul>
        <li>gerenxinxi1</li>
        <li>gerenxinxi2</li>
        <li>gerenxinxi3</li>
        <li>gerenxinxi4</li>
        <li>gerenxinxi5</li>
        <li>gerenxinxi6</li>
        <li>gerenxinxi7</li>
        <li>gerenxinxi8</li>
        <li>gerenxinxi9</li>
        <li>gerenxinxi10</li>
        <li>gerenxinxi11</li>
        <li>gerenxinxi12</li>
        <li>gerenxinxi13</li>
        <li>gerenxinxi14</li>
        <li>gerenxinxi15</li>
        <li>gerenxinxi16</li>
        <li>gerenxinxi17</li>
        <li>gerenxinxi18</li>
        <li>gerenxinxi19</li>
        <li>gerenxinxi20</li>
        <li>gerenxinxi21</li>
        <li>gerenxinxi22</li>
        <li>gerenxinxi23</li>
        <li>gerenxinxi24</li>
        <li>gerenxinxi25</li>
        <li>gerenxinxi26</li>
        <li>gerenxinxi27</li>
        <li>gerenxinxi28</li>
        <li>gerenxinxi29</li>
        <li>gerenxinxi30</li>
        <li>gerenxinxi31</li>
        <li>gerenxinxi32</li>
        <li>gerenxinxi33</li>
        <li>gerenxinxi34</li>
        <li>gerenxinxi35</li>
        <li>gerenxinxi36</li>
        <li>gerenxinxi37</li>
        <li>gerenxinxi38</li>
        <li>gerenxinxi39</li>
        <li>gerenxinxi40</li>
        <li>gerenxinxi41</li>
        <li>gerenxinxi42</li>
        <li>gerenxinxi43</li>
        <li>gerenxinxi44</li>
        <li>gerenxinxi45</li>
        <li>gerenxinxi46</li>
        <li>gerenxinxi47</li>
        <li>gerenxinxi48</li>
        <li>gerenxinxi49</li>
        <li>gerenxinxi50</li>
        <li>gerenxinxi51</li>
        <li>gerenxinxi52</li>
        <li>gerenxinxi53</li>
        <li>gerenxinxi54</li>
        <li>gerenxinxi55</li>
        <li>gerenxinxi56</li>
        <li>gerenxinxi57</li>
        <li>gerenxinxi58</li>
        <li>gerenxinxi59</li>
        <li>gerenxinxi60</li>
        <li>gerenxinxi61</li>
        <li>gerenxinxi62</li>
        <li>gerenxinxi63</li>
        <li>gerenxinxi64</li>
        <li>gerenxinxi65</li>
        <li>gerenxinxi66</li>
        <li>gerenxinxi67</li>
        <li>gerenxinxi68</li>
        <li>gerenxinxi69</li>
        <li>gerenxinxi70</li>
        <li>gerenxinxi71</li>
        <li>gerenxinxi72</li>
        <li>gerenxinxi73</li>
        <li>gerenxinxi74</li>
        <li>gerenxinxi75</li>
        <li>gerenxinxi76</li>
        <li>gerenxinxi77</li>
        <li>gerenxinxi78</li>
        <li>gerenxinxi79</li>
        <li>gerenxinxi80</li>
        <li>gerenxinxi81</li>
        <li>gerenxinxi82</li>
        <li>gerenxinxi83</li>
        <li>gerenxinxi84</li>
        <li>gerenxinxi85</li>
        <li>gerenxinxi86</li>
        <li>gerenxinxi87</li>
        <li>gerenxinxi88</li>
        <li>gerenxinxi89</li>
        <li>gerenxinxi90</li>
        <li>gerenxinxi91</li>
        <li>gerenxinxi92</li>
        <li>gerenxinxi93</li>
        <li>gerenxinxi94</li>
        <li>gerenxinxi95</li>
        <li>gerenxinxi96</li>
        <li>gerenxinxi97</li>
        <li>gerenxinxi98</li>
        <li>gerenxinxi99</li>
        <li>gerenxinxi100</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Profile",
  components: {
    Scroll,
  },
  methods: {
    scrollClick(position) {
      console.log(position);
    },
  },
};
</script>

<style scoped>
.content {
  height: 300px;
  background-color: cornflowerblue;
  overflow: hidden;
}
</style>