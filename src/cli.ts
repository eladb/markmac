#!/usr/bin/env node
import { markmac } from '.';

markmac().catch(e => console.error(e.stack));