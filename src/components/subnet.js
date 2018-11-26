import React, { Component } from 'react';
class SubNet extends Component {
  render() {
    return (
      <div>
        SubNet
        <select name="csubnet" id="csubnet" onchange="return setSubnetV(this.value);">
            <option value="32">255.255.255.255 /32</option>
            <option value="31">255.255.255.254 /31</option>
            <option value="30">255.255.255.252 /30</option>
            <option value="29">255.255.255.248 /29</option>
            <option value="28">255.255.255.240 /28</option>
            <option value="27">255.255.255.224 /27</option>
            <option value="26">255.255.255.192 /26</option>
            <option value="25">255.255.255.128 /25</option>
            <option value="24">255.255.255.0 /24</option>
            <option value="23">255.255.254.0 /23</option>
            <option value="22">255.255.252.0 /22</option>
            <option value="21">255.255.248.0 /21</option>
            <option value="20">255.255.240.0 /20</option>
            <option value="19">255.255.224.0 /19</option>
            <option value="18">255.255.192.0 /18</option>
            <option value="17">255.255.128.0 /17</option>
            <option value="16">255.255.0.0 /16</option>
            <option value="15">255.254.0.0 /15</option>
            <option value="14">255.252.0.0 /14</option>
            <option value="13">255.248.0.0 /13</option>
            <option value="12">255.240.0.0 /12</option>
            <option value="11">255.224.0.0 /11</option>
            <option value="10">255.192.0.0 /10</option>
            <option value="9">255.128.0.0 /9</option>
            <option value="8">255.0.0.0 /8</option>
            <option value="7">254.0.0.0 /7</option>
            <option value="6">252.0.0.0 /6</option>
            <option value="5">248.0.0.0 /5</option>
            <option value="4">240.0.0.0 /4</option>
            <option value="3">224.0.0.0 /3</option>
            <option value="2">192.0.0.0 /2</option>
            <option value="1">128.0.0.0 /1</option>
          </select>
      </div>
    )
  }
}
export default SubNet;