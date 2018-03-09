# -*- coding: utf-8 -*-
import setuptools


setuptools.setup(
    name='todo_api',
    version='0.0.1',
    url='https://github.com/rszalski/react_native_academy',
    author='Radosław Szalski',
    author_email='radoslaw.szalski@gmail.com',

    description='REST API for React Native Academy Project - TODO App',
    long_description=open('../README.md').read(),

    packages=setuptools.find_packages(),

    install_requires=[],

    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
    ],
)
