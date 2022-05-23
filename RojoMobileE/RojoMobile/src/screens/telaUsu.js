import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { StyleSheet, Text, Image, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

import api from '../services/api'
import jwtDecode from 'jwt-decode';

import AsyncStorage from '@react-native-async-storage/async-storage';
//import { baseFontSize } from "native-base/lib/typescript/theme/tools";

