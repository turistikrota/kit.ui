import { setProjectAnnotations } from '@storybook/testing-react'
import '@testing-library/jest-dom'
import globalStorybookConfig from '../.storybook/preview'

setProjectAnnotations(globalStorybookConfig)
