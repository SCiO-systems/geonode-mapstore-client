import os
from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))
with open(os.path.join(here, 'VERSION')) as version_file:
        version = version_file.read().strip()

setup(
    name='django-geonode-mapstore-client',
    version=version,
    author='Alessio Fabiani',
    author_email='alessio.fabiani@gmail.com',
    url='https://github.com/GeoNode/geonode-mapstore-client',
    description="Use GeoNode client in your django projects",
    long_description=open(os.path.join(here, 'README.md')).read(),
    long_description_content_type='text/markdown',
    license='BSD, see LICENSE file.',
    install_requires=[
        "django-mapstore-adapter >= 1.0.0",
    ],

    # adding packages
    packages=find_packages(),

    # trying to add files...
    include_package_data = True,
    package_data = {
        '': ['*.*'],
        '': ['static/*.*'],
        'static': ['*.*'],
        '': ['templates/*.*'],
        'templates': ['*.*'],
    },

    zip_safe = False,
    classifiers  = [],
)
